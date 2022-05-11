import { NextRequest, NextResponse } from 'next/server'
import { getBucket } from '@/Utils/ab-testing'
import { OPTIONS } from '@/Utils/options'

const COOKIE_NAME = 'bucket-home'

export function middleware(req: NextRequest) {
  const bucket = req.cookies[COOKIE_NAME] || getBucket(OPTIONS)
  const url = req.nextUrl.clone()
  url.pathname = `/home/${bucket}`
  const res = NextResponse.rewrite(url)

  // Add the bucket to cookies if it's not there
  if (!req.cookies[COOKIE_NAME]) {
    res.cookie(COOKIE_NAME, bucket)
  }

  return res
}
