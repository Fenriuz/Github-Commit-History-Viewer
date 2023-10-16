export const CommitItemSkeleton = ({ quantity }: { quantity: number }) => {
  return [...Array(quantity)].map((_, key) => (
    <div key={key} className="mx-auto w-full rounded-md p-4 shadow">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-2 py-1">
          <div className="h-2 rounded bg-slate-700"></div>
          <div className="flex items-center gap-4 space-y-2">
            <div className="h-10 w-10 rounded-full bg-slate-700"></div>
            <div className="h-1.5 w-1/4 rounded bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  ));
};
