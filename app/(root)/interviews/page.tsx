import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getLatestInterviews } from "@/lib/actions/general.action";

const YourInterviewsPage = async () => {
    const user = await getCurrentUser();
    const interviews = await getLatestInterviews({ userId: user?.id! });

    return (
        <section className="flex flex-col gap-6">
            <h2>Your Interviews</h2>

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
                    <p>You haven&apos;t taken any interviews yet.</p>
                )}
            </div>
        </section>
    );
};

export default YourInterviewsPage; 