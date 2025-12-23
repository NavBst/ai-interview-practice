import InteviewCard from "@/components/InteviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await getCurrentUser();

  const [userInterveiws, latestInterviews ] = await Promise.all([
    await getInterviewsByUserId(user?.id || "") ,
    await getLatestInterviews({userId: String(user?.id)})]);

  const hasPastInterviews = userInterveiws?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview Ready with AI powered practice & feedback</h2>
          <p className="text-lg">
            Practice real interview question and get instant feedback.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href={"/interview"}>Start the Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
       
        <div className="interviews-section">
          
          {hasPastInterviews ? (
            userInterveiws?.map((interview)=>(<InteviewCard key={interview.id} {...interview} />))
          ) :
          
          (<p>You haven't taken any interviews yet.</p>)}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
           
            {
            hasUpcomingInterviews ? (
            latestInterviews?.map((interview)=>(<InteviewCard key={interview.id} {...interview} />))
          ) :
          
          (<p>There are no new interviews available</p>)
          }
        
        </div>
      </section>
    </>
  );
}
