"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function Transactions() {
  const [bookId, setBookId] = useState("")
  const [memberId, setMemberId] = useState("")

  const handleBorrow = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Borrow transaction:", { bookId, memberId })
    // Reset form
    setBookId("")
    setMemberId("")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Transactions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Borrow Book</CardTitle>
          <CardDescription>Enter the details to borrow a book.</CardDescription>
        </CardHeader>
        <form onSubmit={handleBorrow}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="bookId">Book ID</Label>
                <Input
                  id="bookId"
                  placeholder="Enter book ID"
                  value={bookId}
                  onChange={(e) => setBookId(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="memberId">Member ID</Label>
                <Input
                  id="memberId"
                  placeholder="Enter member ID"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Borrow Book</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

