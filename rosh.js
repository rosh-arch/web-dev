document.addEventListener('DOMContentLoaded', () => {
    // You can dynamically set your profile information here
    // For a real application, this data might come from an API or user input

    const profile = {
        name: "Jane Doe",
        image: "your-image.jpg", // Replace with the actual path to your image
        bio: "Hi, I'm Jane! I'm a passionate web developer with a love for creating engaging and user-friendly experiences. When I'm not coding, I enjoy hiking, reading sci-fi novels, and experimenting with new recipes."
    };

    document.getElementById('profileImage').src = profile.image;
    document.getElementById('profileName').textContent = profile.name;
    document.getElementById('profileBio').textContent = profile.bio;
});