
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Search, Library, BookOpen, Users } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for demonstration
  const books = [
    {
      id: 1,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      publisher: "Basic Books",
      year: 2013,
      genre: "Design",
      status: "Available"
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      publisher: "Prentice Hall",
      year: 2008,
      genre: "Programming",
      status: "Borrowed"
    },
    // Add more mock books as needed
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Searching",
      description: `Searching for: ${searchQuery}`,
    });
  };

  return (
    <div className="min-h-screen p-8 animate-fade-in">
      <header className="max-w-5xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 mb-4">
          <Library className="w-8 h-8 text-primary mr-2" />
          <h1 className="text-4xl font-bold">Bibliothèque</h1>
        </div>
        <p className="text-muted-foreground">Système de Gestion de Bibliothèque</p>
      </header>

      <div className="max-w-6xl mx-auto">
        {/* Search Section */}
        <div className="glass-card rounded-lg p-6 mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <Input
              type="text"
              placeholder="Rechercher par titre, auteur, ou genre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Search className="w-4 h-4 mr-2" />
              Rechercher
            </Button>
          </form>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 glass-card animate-slide-up">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-primary mr-4" />
              <div>
                <h3 className="font-medium">Total des Livres</h3>
                <p className="text-2xl font-bold">1,245</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 glass-card animate-slide-up [animation-delay:100ms]">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-primary mr-4" />
              <div>
                <h3 className="font-medium">Utilisateurs Actifs</h3>
                <p className="text-2xl font-bold">328</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 glass-card animate-slide-up [animation-delay:200ms]">
            <div className="flex items-center">
              <Library className="w-8 h-8 text-primary mr-4" />
              <div>
                <h3 className="font-medium">Emprunts en Cours</h3>
                <p className="text-2xl font-bold">84</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Books Table */}
        <Card className="glass-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre</TableHead>
                <TableHead>Auteur</TableHead>
                <TableHead>Année</TableHead>
                <TableHead>Genre</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium">{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.year}</TableCell>
                  <TableCell>{book.genre}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={book.status === "Available" ? "default" : "secondary"}
                      className="animate-fade-in"
                    >
                      {book.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Index;
