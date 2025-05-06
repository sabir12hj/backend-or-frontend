import React from "react";
import HeroBanner from "@/components/HeroBanner";
import TournamentCard from "@/components/TournamentCard";
import HowItWorks from "@/components/HowItWorks";
import RecentWinners from "@/components/RecentWinners";
import { Skeleton } from "@/components/ui/skeleton";

interface Tournament {
  id: number;
  name: string;
  entryFee: string;
  prizePool: string;
  totalSlots: number;
  startTime: string;
  endTime: string;
  participants: any[];
}

const dummyTournaments: Tournament[] = [
  {
    id: 1,
    name: "General Knowledge Showdown",
    entryFee: "50",
    prizePool: "1000",
    totalSlots: 100,
    startTime: new Date(Date.now() + 3600 * 1000).toISOString(),
    endTime: new Date(Date.now() + 7200 * 1000).toISOString(),
    participants: Array(45),
  },
  {
    id: 2,
    name: "Sports Trivia Bash",
    entryFee: "100",
    prizePool: "2000",
    totalSlots: 150,
    startTime: new Date(Date.now() + 86400 * 1000).toISOString(),
    endTime: new Date(Date.now() + 90000 * 1000).toISOString(),
    participants: Array(87),
  },
];

const Home = () => {
  const liveTournaments = dummyTournaments.filter(
    (t) => new Date(t.startTime) <= new Date() && new Date(t.endTime) > new Date()
  );
  const upcomingTournaments = dummyTournaments.filter(
    (t) => new Date(t.startTime) > new Date()
  );

  return (
    <div>
      <HeroBanner />

      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Live Tournaments</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {liveTournaments.length > 0 ? (
            liveTournaments.slice(0, 3).map((tournament) => (
              <TournamentCard
                key={tournament.id}
                tournament={tournament}
                participantsCount={tournament.participants.length}
                isLive={true}
              />
            ))
          ) : (
            <>
              <Skeleton className="h-64 w-full rounded-lg" />
              <Skeleton className="h-64 w-full rounded-lg" />
              <Skeleton className="h-64 w-full rounded-lg" />
            </>
          )}
        </div>
      </section>

      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Upcoming Tournaments</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingTournaments.length > 0 ? (
            upcomingTournaments.slice(0, 3).map((tournament) => (
              <TournamentCard
                key={tournament.id}
                tournament={tournament}
                participantsCount={tournament.participants.length}
              />
            ))
          ) : (
            <>
              <Skeleton className="h-64 w-full rounded-lg" />
              <Skeleton className="h-64 w-full rounded-lg" />
              <Skeleton className="h-64 w-full rounded-lg" />
            </>
          )}
        </div>
      </section>

      <HowItWorks />
      <RecentWinners />
    </div>
  );
};

export default Home;
