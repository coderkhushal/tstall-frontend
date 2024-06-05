import React from 'react'

const CommentItem = ({userid, publishTime, content,url}:{userid: string, publishTime : string, content: string, url: string}) => {
  return (
           
    <div className="media flex pb-4">
      <a className="mr-4" href="#">
        <img className="rounded-full max-w-none w-12 h-12" src={url? url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
      </a>
      <div className="media-body">
        <div>
          <a className="inline-block text-base font-bold mr-2" href="#">{userid}</a>
          <span className="text-slate-500 dark:text-slate-300">{publishTime.split("T")[0]}</span>
        </div>
        <p>{content}</p>
        <div className="mt-2 flex items-center">
          <a className="inline-flex items-center py-2 mr-3" href="#">
            <span className="mr-2">
              <svg className="fill-rose-600 size-5 dark:fill-rose-400" 
                viewBox="0 0 24 24" >
                <path
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                </path>
              </svg>
            </span>
            <span className="text-base font-bold">12</span>
          </a>
          <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
            Repply
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentItem