import { type Metadata } from 'next'
import Link from 'next/link'

import { Column, Flex } from '@local/ui/Flex'
import { Heading } from '@local/ui/Heading'
import { Text } from '@local/ui/Text'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

const NotFound = () => {
  return (
    <Flex
      items="center"
      justify="center"
      className="h-screen w-full bg-gray-200 px-16 md:px-0"
    >
      <Column
        items="center"
        justify="center"
        className="rounded-lg border border-gray-200 bg-white px-4 py-8 shadow-2xl md:px-8 lg:px-24"
      >
        <Heading as="h1" className="text-gray-300 md:text-7xl lg:text-9xl">
          404
        </Heading>
        <Heading
          as="h2"
          className="mt-4 text-2xl text-gray-500 md:text-3xl lg:text-5xl"
        >
          Page Not Found
        </Heading>
        <Text className="mt-4 border-b-2 pb-4 text-gray-500">
          Sorry, the page you are looking for could not be found.
        </Text>
        <Link
          href="/"
          title="Go Home"
          className="bg-primary mt-6 flex items-center space-x-2 rounded px-4 py-2 text-gray-100 transition duration-150 hover:bg-blue-700"
        >
          <span>Go Home</span>
        </Link>
      </Column>
    </Flex>
  )
}

export default NotFound
