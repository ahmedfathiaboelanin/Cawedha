import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function SignupBtn() {
  return (
    <Link href={'/signup'} className='flex gap-2 justify-center items-center border-2 border-blue-600 text-blue-600 font-medium text-lg  px-3 py-2 rounded-xl
    hover:border-transparent hover:text-white hover:bg-blue-600
    '>
      اشترك الآن
      مجانا
    </Link>
  )
}
