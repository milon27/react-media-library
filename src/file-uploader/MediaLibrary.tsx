import React, { useState } from 'react'
import FileUploader from './components/FileUploader'
import Button from './components/Button'
import MediaFileListForSelect, { MediaLibraryForPreview } from './components/MediaFileList'

interface iMediaLibrary {
    uploadUrl: string,// e.g. /uploadUrl
    onFileDelete: (index: number) => void,
    previewList: string[]
    setPreviewList: React.Dispatch<React.SetStateAction<string[]>>
    isSelect?: boolean
}

export default function MediaLibrary({ uploadUrl, onFileDelete, previewList, setPreviewList, isSelect = false }: iMediaLibrary) {
    const [show, setShow] = useState(false)

    return (
        <div>
            <div className='rml-flex rml-justify-between rml-items-center rml-mb-4 '>
                <h1 className='rml-font-bold rml-text-2xl'> Media Library </h1>

                <Button title="Upload New Image" onClick={() => { setShow(true) }} />
            </div>
            {
                show && <FileUploader uploadUrl={uploadUrl} setOpen={setShow} setPreviewList={setPreviewList} />
            }

            {
                isSelect === false ? <MediaLibraryForPreview onFileDelete={onFileDelete} previewList={previewList} /> : <MediaFileListForSelect list={previewList} />
            }
        </div>
    )
}
