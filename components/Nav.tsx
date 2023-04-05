'use client'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image';

let currentPath = '';
if (typeof window !== 'undefined') {
    currentPath = window.location.pathname;
}
const navigation = [
    { name: 'Pocetna', href: '/', current: currentPath === '/' },
    { name: 'O nama', href: '/onama', current: currentPath === '/onama' },

    { name: 'W&H AD 2360/16', href: '/wah', current: currentPath === '/wah' },
    { name: 'Kontakt', href: '/contact', current: currentPath === '/contact' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className="mx-auto z-50 max-w-7xl   px-5 sm:px-6 lg:px-8">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href={'/'}>
                                        <Image className='block h-16 w-auto lg:hidden' src={'/LogoS.png'} width={200} height={200} alt={'Logo'} />
                                    </Link>
                                    <Link href={'/'}>
                                        <Image className='lg:block h-16 w-auto hidden' src={'/LogoS.png'} width={200} height={200} alt={'Logo'} />
                                    </Link>

                                </div>
                                <div className="hidden  sm:ml-6 sm:block">
                                    <div className="flex  space-x-10">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-teal-700 text-white' : 'text-gray-700 hover:bg-teal-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-teal-700 text-white' : 'text-gray-700 hover:bg-teal-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}