type UserCardProps = {
  username: string;
  isAdmin: boolean;
};

export default function UserCard({ username, isAdmin }: UserCardProps) {
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <span className="font-bold">{username}</span>

      {isAdmin && (
        <span className="ml-2 text-sm text-red-600 font-medium">(管理者)</span>
      )}
    </div>
  );
}
