'use client'
import { Plus } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"


import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

export const BillboardClient = ()=>{

    const router = useRouter()
    const params = usePathname()

    return(

        <>
        
            <div className="flex items-center justify-between">
            <Heading
            title="Billboards (0)"
            description="Mange Billboards for your store"
            />
            <Button onClick={()=> router.push(`/${params.storeId}/billboards/new`)}>
                <Plus className="mr-2 h-4 w-4" />
                Add New
            </Button>
            </div>
            <Separator />
        </>
    )
}