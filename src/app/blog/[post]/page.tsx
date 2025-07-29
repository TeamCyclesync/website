import { storyblokApi } from "@/config/storyblok";
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/landing/Footer";
import BlogDetailClient from "@/components/BlogDetailClient";
import { formatUrlForSEO } from "@/lib/utils";

async function getBlogPost(post: string) {
  if (!storyblokApi) {
    console.error("Storyblok API is not initialized");
    return null;
  }
  try {
    const { data: pageData } = await storyblokApi.get("cdn/stories/blogs", {
      version: "draft"
    });
    if (pageData?.story?.content?.body) {
      const blogPost = pageData.story.content.body.find((block: any) =>
        block.component === "blog_post" && formatUrlForSEO(block.Url) === post
      );
      if (blogPost) {
        return { content: blogPost };
      }
    }
    return null;
  } catch (error) {
    console.error("Error fetching blog post from Storyblok:", error);
    return null;
  }
}

export default async function BlogPost({ params }: { params: { post: string } }) {
  const { post } = params;
  const story = await getBlogPost(post);
  if (!story) {
    return (
      <div className="min-h-screen">
        <div className="inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <Navigation />
        </div>
        <main className="flex-grow container mx-auto p-4 mt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-anton">Blog post not found</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <>
      <Navigation />
      <BlogDetailClient story={story} />
    </>
  );
}