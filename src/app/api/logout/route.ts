import { NextResponse } from 'next/server';

import { logOutUser } from '@/utils/services/api';

export async function POST() {
  try {
    const result = await logOutUser();

    if (result && result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
