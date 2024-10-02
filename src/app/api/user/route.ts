import { NextResponse } from 'next/server';

import { getInfoUserById, getUserData } from '@/utils/services/api';

export async function GET() {
  try {
    const result = await getUserData();
    const userID = result.user.id;

    if (userID) {
      const userInfo = await getInfoUserById(userID);
      return NextResponse.json({ user: userInfo, isAuthenticated: true });
    }

    return NextResponse.json({ isAuthenticated: false });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching user info:', error);

    return NextResponse.json({ isAuthenticated: false });
  }
}
