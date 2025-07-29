import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const randomLoadingMessages = [
  "Bribing the server with cookies...",
  "Convincing electrons to cooperate...",
  "Loading your future... please ignore the screaming.",
  "Yelling at the code... it's not listening.",
  "Counting how many times you've seen this message...",
  "Reversing gravity... please remain seated.",
  "Asking ChatGPT for help... again.",
  "Tuning the internet's chakra...",
  "Hiring more invisible hamsters...",
  "Whispering sweet nothings to the API...",
  "Breaking the fourth wall...",
  "Loading... or are we?",
  "Waking up the sleepy bits...",
  "Testing your patience since now.",
  "Searching for a loading bar therapist...",
  "Confusing progress with success...",
  "Sending smoke signals to the cloud...",
  "Plotting world domination... later.",
  "Filing TPS reports about TPS reports...",
  "Accidentally divided by zero...",
  "Throwing code at the wall to see what sticks...",
  "Breeding bugs in captivity...",
  "Loading the loader that loads the loader...",
  "Deploying virtual ducks for moral support...",
  "Pretending to work hard...",
  "Installing updates to the updates...",
  "Spinning in existential circles...",
  "Getting lost in a semicolon...",
  "Upgrading your loading experience to Premium™...",
  "Painting pixels with Bob Ross...",
];
