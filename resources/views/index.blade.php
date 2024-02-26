<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/1ce7f964f6.js" crossorigin="anonymous"></script>
    @vite('resources/css/app.css')
</head>

<body class="min-h-screen flex justify-center items-center flex-col bg-slate-600">
    <nav class="flex items-center">
        <h1 class="text-3xl font-bold underline text-center text-white mr-4">
            TO DO
        </h1>
        <span class="text-white"><i class="fas fa-sun"></i></span>
    </nav>
    <form action="{{ route('store') }}" method="POST" autocomplete="off" class="mt-4">
        @csrf
        <div class="container mx-auto">
            <input type="text" placeholder="Add your ToDo" name="content" class="border rounded p-2 required">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded ml-2">Add</button>
        </div>
    </form>
    <form action="" class="mt-4">
        @csrf
        <ul class="list-disc ml-4">
            <li class="text-white">Insert Code</li>
        </ul>
    </form>
</body>

</html>
