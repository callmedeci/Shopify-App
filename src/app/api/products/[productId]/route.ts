import data from '@/data/db.json';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;
  const product = data.products.find(
    (product) => product.id.toString() === productId
  );

  if (!product)
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });

  return Response.json(product);
}
