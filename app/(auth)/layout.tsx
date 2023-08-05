import * as React from 'react';


export default function AuthLayout ({children} : {children : React.ReactNode}) {
  return (
    <div  className="flex items-center w-full justify-center h-full">
      {children}
    </div>
  );
}
