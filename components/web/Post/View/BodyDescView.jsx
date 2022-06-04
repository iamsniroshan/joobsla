
import ContentEditable from 'react-contenteditable'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function BodyDescComponent(jobDescription) {


    return (
        <>
            <div className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 job-detail-height">
            <ContentEditable html={jobDescription.desc} disabled={true}/>
            </div>

        </>
    )
}
