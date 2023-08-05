import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: {
              fontSize: 14,
              textTransform: "none",
              backgroundColor: "green",
              "&:hover, &:focus, &:active": {
                opacity : '0.8'
              },
            },
          },
        }}
      />
    </div>
  );
}
