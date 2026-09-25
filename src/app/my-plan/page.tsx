import PlanCard from '../components/my-plan/PlanCard';
import Toggle from '../components/my-plan/Toggle';

const MyPlanPage = () => {

    return (
        <section className="container mx-auto">
            <h1 className='text-4xl font-bold'>MY PLAN</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
            <div className='bg-base-300 rounded-2xl overflow-hidden border p-5 mt-5
            *:w-full divide-x text-center
            flex justify-between'>
                <div >
                    <h3>Exercise</h3>
                    <p className='text-accent text-4xl font-bold'>2</p>
                </div>
                <div>
                    <h3>Minutes</h3>
                    <p className='text-primary-content text-4xl font-bold'>23</p>
                </div>
                <div>
                    <h3>Calories</h3>
                    <p className='text-primary-content text-4xl font-bold'>190</p>
                </div>
            </div>


            <Toggle/>

            <PlanCard key={1} workout={[]}/>

        </section>
    );
};

export default MyPlanPage;