import Image from 'next/image'
import React from 'react'

const WorkItem = ({ image, title, desc }) => {
  return (
    <div className="p-4 py-6 lg:p-5 md:py-8 2xl:p-8 text-white border border-white bg-[#111111] flex flex-col gap-5 rounded-lg xl:rounded-[20px] w-full md:min-w-[170px] xl:w-[240px] 2xl:w-[280px]">
      <Image
        className="w-[45px] aspect-square lg:w-[60px] 2xl:w-[85px]"
        src={image}
        alt={title}
        height={85}
        width={85}
      />
      <p className="text-sm lg:text-xl 2xl:text-[28px] font-semibold max-w-[250px] h-[30px] md:h-[45px]">
        {title}
      </p>
      <p className="text-xs lg:text-base 2xl:text-xl font-light md:font-light tracking-[1px]">
        {desc}
      </p>
    </div>
  )
}

export default WorkItem
