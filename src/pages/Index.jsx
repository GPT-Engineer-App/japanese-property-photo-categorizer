import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Input, Stack, Grid, useToast } from "@chakra-ui/react";
import { FaPlus, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1693148024020-42693bb3c3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlRTUlQkIlQkElRTglQTglQUQlRTQlQjglQUQlRTMlODElQUUlRTQlQkQlOEYlRTUlQUUlODV8ZW58MHx8fHwxNzExMTg1MDc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      description: "東京都渋谷区の新築一戸建て住宅の建設現場",
      location: "東京都渋谷区",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1633333226413-0b593532de59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHwlRTUlQkIlQkElRTglQTglQUQlRTQlQjglQUQlRTMlODElQUUlRTQlQkQlOEYlRTUlQUUlODV8ZW58MHx8fHwxNzExMTg1MDc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      description: "神奈川県横浜市の新築マンションの建設現場",
      location: "神奈川県横浜市",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1710513091724-beb2076956d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHwlRTUlQkIlQkElRTglQTglQUQlRTQlQjglQUQlRTMlODElQUUlRTQlQkQlOEYlRTUlQUUlODV8ZW58MHx8fHwxNzExMTg1MDc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      description: "大阪府大阪市の新築一戸建て住宅の建設現場",
      location: "大阪府大阪市",
    },
  ]);
  const [newImage, setNewImage] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const toast = useToast();

  const handleAddImage = () => {
    if (newImage && newLocation && newDescription) {
      const newId = images.length + 1;
      const newImageObj = {
        id: newId,
        url: newImage,
        description: newDescription,
        location: newLocation,
      };
      setImages([...images, newImageObj]);
      setNewImage("");
      setNewLocation("");
      setNewDescription("");
      toast({
        title: "画像が追加されました",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "全ての項目を入力してください",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8}>
      <Heading as="h1" mb={8}>
        建設中の住宅画像管理サービス
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {images.map((image) => (
          <Box key={image.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={image.url} alt={image.description} mb={4} />
            <Text mb={2}>
              <FaMapMarkerAlt /> {image.location}
            </Text>
            <Text>{image.description}</Text>
          </Box>
        ))}
      </Grid>
      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          新しい画像を追加
        </Heading>
        <Stack spacing={4}>
          <Input placeholder="画像のURLを入力" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
          <Input placeholder="住所を入力" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
          <Input placeholder="説明を入力" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
          <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddImage}>
            画像を追加
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
