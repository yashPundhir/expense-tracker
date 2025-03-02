import { Skeleton } from "@/components/ui/skeleton";

const DashoardShimmer = () => {
	return (
		<section className="w-full flex flex-col justify-center items-center gap-5">
			<div className="w-full flex sm:flex-row flex-col  sm:justify-between justify-center items-center gap-3 ">
				<Skeleton className="sm:w-[200px] w-[150px] sm:h-[55px] h-[30px] rounded-md" />
				<div className=" flex flex-row sm:justify-start justify-center items-center sm:gap-10 gap-3">
					<Skeleton className="sm:w-[200px] w-[150px] sm:h-[55px] h-[30px] rounded-md" />
					<Skeleton className="sm:w-[200px] w-[150px] sm:h-[55px] h-[30px] rounded-md" />
				</div>
			</div>
			<div className="w-full flex sm:justify-end justify-center">
				<Skeleton className="sm:w-[150px] w-[130px] sm:h-[40px] h-[30px] rounded-md" />
			</div>
			<div className="w-full flex flex-row flex-wrap justify-center items-center sm:gap-10 gap-5">
				{[1, 2, 3, 4, 5, 6].map((_, index) => (
					<Skeleton
						key={index}
						className="sm:w-[500px] w-[300px] sm:h-[90px] h-[60px] rounded-lg"
					/>
				))}
			</div>
		</section>
	);
};

export default DashoardShimmer;
