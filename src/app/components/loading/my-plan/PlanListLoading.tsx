const PlanListLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <span className="loading loading-spinner loading-lg text-accent"></span>
            <p className="text-lg font-semibold text-base-content/70">Workout Data loading...</p>
        </div>
    );
};

export default PlanListLoading;