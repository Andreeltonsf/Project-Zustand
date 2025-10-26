import { useStore } from "@/store";
import { useForm } from "react-hook-form";
import { useShallow } from "zustand/react/shallow";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function UserProfile() {
  /**
   * Utilizado o useStore como hook acabaremos tendo renderizações desnecessárias quando o state mudar
   */

  /**  const user = useStore((state) => state.user);
  const setUsername = useStore((state) => state.setUsername); **/

  const { user, setUsername } = useStore(
    useShallow((state) => ({
      user: state.user,
      setUsername: state.user.setUsername,
    }))
  );

  const form = useForm({
    defaultValues: {
      username: user.user.username,
    },
  });

  const handleSubmit = form.handleSubmit((formData) => {
    setUsername(formData.username);
  });

  return (
    <div className="space-y-4 space-x-2">
      <Avatar>
        <AvatarImage
          src={`https://github.com/${user.user.username}.png`}
          alt={`@${user.user.username}`}
        />
        <AvatarFallback>
          {user.user.username.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <form className="space-y-4 flex" onSubmit={handleSubmit}>
        <Input placeholder="Username" {...form.register("username")} />
        <Button type="button" className="ml-3">
          Salvar
        </Button>
      </form>
    </div>
  );
}
