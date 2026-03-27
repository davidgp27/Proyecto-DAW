export function CommentCard({ comment }) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 dark:border-outline-variant/30 flex-shrink-0">
        <img 
          alt={comment.author}
          className="w-full h-full object-cover" 
          src={comment.avatar}
        />
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-xs font-medium text-on-surface dark:text-on-surface">
          {comment.author} 
          <span className="text-[10px] text-on-surface-variant/40 dark:text-on-surface-variant/40 font-normal ml-2">
            {comment.timeAgo}
          </span>
        </p>
        <p className="text-xs text-on-surface-variant dark:text-on-surface-variant leading-snug">
          {comment.text}
        </p>
      </div>
    </div>
  );
}
