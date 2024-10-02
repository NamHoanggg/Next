import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { logInWithPassword } from '@/utils/services/api';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const result = await logInWithPassword(email, password);

    if (result && result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, user: result.data.user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
