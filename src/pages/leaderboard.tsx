import { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DataTable } from "@/components/ui/data-table";

interface Tournament {
  id: string;
  name: string;
}

interface Player {
  id: string;
  name: string;
  score: number;
  avatar: string;
}

export default function LeaderboardPage() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTournamentId, setSelectedTournamentId] = useState<string>("");

  useEffect(() => {
    // Mock data - replace with actual API
    setTimeout(() => {
      const mockTournaments = [
        { id: "1", name: "Tournament A" },
        { id: "2", name: "Tournament B" },
      ];
      setTournaments(mockTournaments);
      setSelectedTournamentId(mockTournaments[0].id);

      setPlayers([
        { id: "1", name: "Player 1", score: 90, avatar: "P1" },
        { id: "2", name: "Player 2", score: 80, avatar: "P2" },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  const tournament = tournaments.find((t) => t.id === selectedTournamentId);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>

      {loading ? (
        <Skeleton className="h-20 w-full" />
      ) : tournaments.length > 0 ? (
        <Tabs value={selectedTournamentId} onValueChange={setSelectedTournamentId}>
          <TabsList>
            {tournaments.map((t) => (
              <TabsTrigger key={t.id} value={t.id}>
                {t.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={selectedTournamentId}>
            <Card>
              <CardContent>
                <Input placeholder="Search player..." />
                <div className="mt-4 space-y-2">
                  {players.map((player) => (
                    <div key={player.id} className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>{player.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">{player.name}</p>
                        <p className="text-sm text-muted-foreground">Score: {player.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <p>No tournaments found.</p>
      )}
    </div>
  );
}
