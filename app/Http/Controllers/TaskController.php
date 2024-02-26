<?php

namespace App\Http\Controllers;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index() 
    {
        $mytasks = Task::all();
        return view('index', compact('mytasks'));
    }
    public function store(Request $request) 
    {
        $data = $request->validate([
            'content' => 'required|string|max:180',
        ]);
    
        Task::create([
            'content' => $request->input('content'),
        ]);

        return redirect()->route('index');

    }
}
