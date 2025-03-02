import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Invalid email address' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db('cyclesync');
    const collection = db.collection('subscribers');

    const existingSubscriber = await collection.findOne({ email });

    if (existingSubscriber) {
      return new Response(JSON.stringify({ error: 'Email already subscribed' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await collection.insertOne({ email, subscribedAt: new Date() });

    return new Response(JSON.stringify({ message: 'Subscription successful' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
