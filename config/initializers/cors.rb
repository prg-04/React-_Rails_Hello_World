Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'example.com' # Specify the domains allowed to access your resources (replace 'example.com' with your domain)
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
    # Specify allowed HTTP methods and headers as needed
  end
end
