import { ScalableDocumentV2 } from 'components/scalable-document-v2/scalable-document-v2'

import outlineBanImg from './outline-ban.png'

export const SoftExpiredBanner = ({}): JSX.Element => {
    return (
        <ScalableDocumentV2>
            <div className="w-[1280px]">
                <div className="flex flex-row items-start justify-center gap-1 bg-[#FDF2F2] p-1 leading-5">
                    <div className="my-4 text-[18px] font-bold font-['Inter'] text-[#374151]">
                        This document has expired.
                    </div>
                </div>
                <div className="h-[400px] flex flex-col gap-1 items-start justify-center items-center gap-1 bg-[#F3F4F6] p-1 leading-5">
                    <img
                        style={{
                            height: '93px',
                            width: '93px',
                        }}
                        src={outlineBanImg}
                        alt="HSA stamp"
                    ></img>
                    <div className="my-4 text-[18px] font-bold font-['Inter'] text-[#6B7280]">
                        Issuer has disabled it from being displayed.
                    </div>
                </div>
            </div>
        </ScalableDocumentV2>
    )
}
