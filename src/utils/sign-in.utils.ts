import { ESignInMessage } from '../types/sign-in.types';

export const getSignInErrorMessage = (error: ESignInMessage): string => {
  switch (error) {
    case ESignInMessage.OAuthSignin:
      return 'Error in constructing an authorization URL. Please try again.';
    case ESignInMessage.OAuthCallback:
      return 'Error in handling the response from an OAuth provider. Please try again.';
    case ESignInMessage.OAuthCreateAccount:
      return 'Could not create OAuth provider user in the database. Please try again.';
    case ESignInMessage.EmailCreateAccount:
      return 'Could not create email provider user in the database.. Please try again.';
    case ESignInMessage.Callback:
      return 'Error in the OAuth callback handler route';
    case ESignInMessage.OAuthAccountNotLinked:
      return `Looks like you already have an account, but you've signed in before using another social media provider! Please sign in with the provider you used to create your account.`;
    case ESignInMessage.EmailSignin:
      return 'Sending the e-mail with the verification token failed. Please try again.';
    case ESignInMessage.CredentialsSignin:
      return 'The authorize callback returned null. Please try again.';
    case ESignInMessage.SessionRequired:
      return 'The content of this page requires you to be signed in at all times. Please sign in to continue.';
    case ESignInMessage.Default:
    default:
      return 'An error occurred. Please try again.';
  }
};
