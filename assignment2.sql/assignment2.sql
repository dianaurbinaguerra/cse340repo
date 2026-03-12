------------individual work w2
NSERT INTO public.account (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

UPDATE public.account
SET
account_type = REPLACE('Client', 'Admin') 
WHERE account_lastname = 'Stark';

DELETE FROM public.account WHERE account_lastname = 'Stark';
