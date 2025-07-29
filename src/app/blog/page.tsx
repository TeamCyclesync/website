import { storyblokApi } from "@/config/storyblok";
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/landing/Footer";
import BlogListClient from "@/components/BlogListClient";

interface BlogPostBlock {
  _uid: string;
  title: string;
  description: string;
  image: string;
  type: string;
  author: string;
  authorImage: string;
  date: string;
  content: string;
}

async function getBlogPosts() {
  if (!storyblokApi) {
    console.error("Storyblok API is not initialized");
    return [];
  }
  try {
    const { data } = await storyblokApi.get("cdn/stories/blogs", {
      version: "published"
    });
    if (data?.story?.content?.body) {
      return data.story.content.body
        .filter((block: any) => block.component === "blog_post")
        .reverse()
        .map((block: any) => ({
          _uid: block._uid,
          id: block._uid,
          title: block.Title,
          description: block.Description,
          image: block.Image,
          type: block.Type,
          author: block.Author,
          authorImage: block.Author_Image,
          date: block.Published,
          content: block.Content,
          Url: block.Url,
        }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching blog posts from Storyblok:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogPosts: BlogPostBlock[] = await getBlogPosts();
  return (
    <div className="gradient-bg dotted-grid-mask min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden">
      <Navigation />
      <BlogListClient blogPosts={blogPosts} />
      <Footer />
    </div>
  );
}
