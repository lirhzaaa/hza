FROM php:8.0-apache

# Install dependencies
RUN apt-get update && apt-get install -y \
    libssl1.0.0 \
    libssl-dev \
    unzip \
    && docker-php-ext-install pdo pdo_mysql

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY . /var/www/html

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
