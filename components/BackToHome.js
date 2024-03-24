import { Button } from "@/components/Button";
import { Link, css } from "firebolt";

export function BackToHome() {
	return (
		<div
			css={css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: var(--spacing-2);
      padding: var(--spacing-1); 
      border-radius: var(--radii-lg);
      background: var(--colors-gray-300);
      & :hover {
        cursor: pointer;
      }
    `}
		>
			<Link href="/">
				<Button type="button">Back to home page</Button>
			</Link>
		</div>
	);
}
