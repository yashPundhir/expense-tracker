import { Skeleton } from "@/components/ui/skeleton";

const DashoardShimmer = () => {
	return (
		<section className="w-full flex flex-col justify-center items-center gap-5">
			<div className="w-full flex flex-row justify-between items-center">
				<Skeleton className="w-[200px] h-[55px] rounded-md" />
				<div className="flex flex-row justify-start items-center gap-10">
					<Skeleton className="w-[200px] h-[55px] rounded-md" />
					<Skeleton className="w-[200px] h-[55px] rounded-md" />
				</div>
			</div>
			<div className="w-full flex justify-end">
				<Skeleton className="w-[150px] h-[40px] rounded-md" />
			</div>
			<div className="w-full flex flex-row flex-wrap justify-center items-center gap-10">
				{[1, 2, 3, 4, 5, 6].map((_, index) => (
					<Skeleton key={index} className="w-[500px] h-[90px] rounded-lg" />
				))}
			</div>
		</section>
	);
};

export default DashoardShimmer;
