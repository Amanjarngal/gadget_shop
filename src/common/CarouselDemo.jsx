import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CarouselDemo = () => {
  return (
    <Carousel className="w-full max-w-xs ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem >
            <div className=" flex  ">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center ">
                  <span className="p-0">
                    <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="IMAGE" />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselDemo;
