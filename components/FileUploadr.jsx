'use client'

import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const FileUploader = ({ files, onChange }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='file-upload'>
      <input {...getInputProps()} />
      {
        files && files?.length > 0 ? (
            <Image 
                src={convertFileToUrl(files[0])}
                width={1000}
                height={1000}
                alt='الصورة التي تم تحميلها'
                className='max-h-[400px] overflow-hidden object-cover'
            />
        ) :
        (<>
             <Image 
                src='/assets/upload.svg'
                width={40}
                height={40}
                alt='upload'
            />
            <div className='file-upload_label'>
                <p className='text-14-regular'>
                    <span className='text-customGold'>انقر للتحميل</span> أو اسحب و أفلت
                </p>
                <p>
                    SVG, PNG, JPG or GIF (الحد الأقصى 800x400)
                </p>
            </div>
        </>)
      }
    </div>
  )
}

export default FileUploader;