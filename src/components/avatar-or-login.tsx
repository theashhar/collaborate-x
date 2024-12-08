'use client';

import React from 'react';
import { useLogout } from '@/features/auth/api/use-logout';
import { useCurrent } from '@/features/auth/api/use-current';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname,useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import { LogOut } from 'lucide-react';

const AvatarOrLogin = () => {
  const pathname = usePathname();
  const { data: user, isLoading } = useCurrent();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-10 w-10">
        <div className="animate-spin h-5 w-5 border-4 border-gray-300 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <AvatarButton user={user} />
      ) : (
        <Button asChild variant="secondary">
          <Link href={pathname !== '/sign-in' ? '/sign-in' : '/sign-up'}>
            {pathname === '/sign-in' ? 'Sign Up' : 'Login'}
          </Link>
        </Button>
      )}
    </div>
  );
};

export default AvatarOrLogin;

interface User {
  name: string;
  email: string;
}

const AvatarButton = ({ user }: { user: User }) => {
  const { mutate: logout } = useLogout();
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-10 h-10 rounded-full border-2 border-neutral-300 flex items-center justify-center">
          <AvatarFallback className="text-xs font-semibold bg-neutral-200">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-48">
        <DropdownMenuLabel className="font-medium text-neutral-800">
          {user?.name || 'User'}
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-xs text-neutral-500 truncate">
          {user?.email || 'No email provided'}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => logout({}, {
            onSuccess: () => {
              router.push('/')
            }
        })} className="text-red-600 flex items-center gap-2">
          <LogOut size={16} /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
