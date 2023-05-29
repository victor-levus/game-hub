import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // if (error) return <p>{error}</p>;

  return (
    <Box height={""} pl="3" marginBottom={5}>
      <Heading fontSize={"2xl"} marginBottom={3} as={"h6"}>
        Genres
      </Heading>
      {isLoading &&
        skeletonArray.map((item) => <GenreListSkeleton key={item} />)}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} marginBottom={2}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize={"16px"}
                variant={"link"}
                whiteSpace={"normal"}
                textAlign={"left"}
                // fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                textColor={selectedGenreId === genre.id ? "red" : ""}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
