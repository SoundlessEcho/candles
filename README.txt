The Enchanted Flame — Static site bundle

Files created in this folder are ready to be uploaded to a GitHub Pages repository.
1. Upload the entire folder contents to a repo named YOURUSERNAME.github.io (replace YOURUSERNAME).
2. Ensure the file `assets/logo.png` is present (it has been included).
3. To enable downloadable catalog, upload a file named `catalog.pdf` and update the link in downloads.html if needed.
4. Payments: This demo uses a mock cart. To accept payments, connect PayPal/Stripe/Shopify and replace 'Add to Cart' actions with live checkout links.
   - For PayPal "Buy Now", use: https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL_EMAIL&item_name=Moonlit+Amber&amount=24.00&currency_code=USD
   - For Stripe or Shopify, follow their instructions for hosted checkout.

To deploy on GitHub Pages:
- Create a repo named `yourusername.github.io`
- Upload files (commit)
- Settings → Pages → Deploy from a branch → branch: main, folder: /(root)
- Wait a minute then visit https://yourusername.github.io
