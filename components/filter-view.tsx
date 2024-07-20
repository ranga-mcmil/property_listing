"use client"

import { LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export function FilterViewButtons() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()


  const handleClick = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
        params.set('view', term);
    }

    replace(`${pathname}?${params.toString()}`);
}

  return (
    <div className="flex space-x-2">
      <Button variant="outline" className="p-2" onClick={() => handleClick('id')}>
        <List className="w-5 h-5" />
      </Button>
      <Button variant="outline" className="p-2" onClick={() => handleClick('fdssfs')}>
        <LayoutGrid className="w-5 h-5" />
      </Button>
    </div>
);
}
