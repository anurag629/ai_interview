import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId } from "@/lib/actions/general.action";

const PendingInterviewsPage = async () => {
    const user = await getCurrentUser();
    const interviews = await getInterviewsByUserId(user?.id!);

    return (
        <section className="flex flex-col gap-6">
            <h2>Pending Interviews</h2>

            <div className="interviews-section">
                {interviews && interviews.length > 0 ? (
                    interviews.map((interview) => (
                        <InterviewCard
                            key={interview.id}
                            userId={user?.id}
                            interviewId={interview.id}
                            role={interview.role}
                            type={interview.type}
                            techstack={interview.techstack}
                            createdAt={interview.createdAt}
                        />
                    ))
                ) : (
                    <p>There are no pending interviews available.</p>
                )}
            </div>
        </section>
    );
};

export default PendingInterviewsPage; 