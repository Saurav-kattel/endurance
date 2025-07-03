import { Text } from "@mantine/core";

export default function Message() {
  return (
    <div className="flex w-full items-center justify-center h-[90vh] flex-col gap-6">
      <Text className="text-2xl break-words text-center  text-gray-400 ">
        Feature Currently Unavailable
      </Text>
      <Text className="text-2xl text-gray-400 ">Available Soon</Text>
    </div>
  );
}
