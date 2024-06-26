import LoadingCat from '@/app/components/LoadingCat'

const UpLoading = () => {
    return (
        <div className="w-full h-full absolute top-0 left-0 bg-white z-[15] flex justify-center items-center dark:bg-[#474747] dark:text-[#eee]">
            <LoadingCat text={'작성 중이에요 ✏️'} />
        </div>
    )
}

export default UpLoading
