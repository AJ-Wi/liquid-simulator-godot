#!python
import os, subprocess

opts = Variables([], ARGUMENTS)

# Gets the standard flags CC, CCX, etc.
env = DefaultEnvironment()

# Define our options
opts.Add(EnumVariable('target', "Compilation target", 'debug', ['d', 'debug', 'r', 'release']))
opts.Add(EnumVariable('platform', "Compilation platform", '', ['', 'windows', 'x11', 'linux', 'osx', 'javascript']))
opts.Add(EnumVariable('p', "Compilation target, alias for 'platform'", '', ['', 'windows', 'x11', 'linux', 'osx', 'javascript']))
opts.Add(BoolVariable('use_llvm', "Use the LLVM / Clang compiler", 'no'))
opts.Add(PathVariable('target_path', 'The path where the lib is installed.', 'bin/lib/'))
opts.Add(PathVariable('target_name', 'The library name.', 'libliquidsim', PathVariable.PathAccept))
opts.Add(PathVariable('emscripten', "The path where the emscripten is installed", '', PathVariable.PathAccept))

# Local dependency paths, adapt them to your setup
godot_headers_path = "godot-cpp/godot-headers/"
cpp_bindings_path = "godot-cpp/"
cpp_library = "libgodot-cpp"

# only support 64 at this time..
bits = 64

# Updates the environment with the option variables.
opts.Update(env)

# Process some arguments
if env['use_llvm']:
    env['CC'] = 'clang'
    env['CXX'] = 'clang++'

if env['p'] != '':
    env['platform'] = env['p']

if env['platform'] == '':
    print("No valid target platform selected.")
    quit();

# For the reference:
# - CCFLAGS are compilation flags shared between C and C++
# - CFLAGS are for C-specific compilation flags
# - CXXFLAGS are for C++-specific compilation flags
# - CPPFLAGS are for pre-processor flags
# - CPPDEFINES are for pre-processor defines
# - LINKFLAGS are for linking flags

# Check our platform specifics
if env['platform'] == "osx":
    cpp_library += '.osx'
    if env['target'] in ('debug', 'd'):
        env.Append(CCFLAGS=['-g', '-O2', '-arch', 'x86_64'])
        env.Append(LINKFLAGS=['-arch', 'x86_64'])
        env.Append(CXXFLAGS=['-std=c++17'])
    else:
        env.Append(CCFLAGS=['-g', '-O3', '-arch', 'x86_64'])
        env.Append(LINKFLAGS=['-arch', 'x86_64'])
        env.Append(CXXFLAGS=['-std=c++17'])

elif env['platform'] in ('x11', 'linux'):
    cpp_library += '.linux'
    if env['target'] in ('debug', 'd'):
        env.Append(CCFLAGS=['-fPIC', '-g3', '-Og'])
        env.Append(CXXFLAGS=['-std=c++17'])
    else:
        env.Append(CCFLAGS=['-fPIC', '-g', '-O3'])
        env.Append(CXXFLAGS=['-std=c++17'])

elif env['platform'] == "windows":
    cpp_library += '.windows'
    # This makes sure to keep the session environment variables on windows,
    # that way you can run scons in a vs 2017 prompt and it will find all the required tools
    env.Append(ENV=os.environ)

    env.Append(CPPDEFINES=['WIN32', '_WIN32', '_WINDOWS', '_CRT_SECURE_NO_WARNINGS'])
    env.Append(CCFLAGS=['-W3', '-GR'])
    if env['target'] in ('debug', 'd'):
        env.Append(CPPDEFINES=['_DEBUG'])
        env.Append(CCFLAGS=['-EHsc', '-MDd', '-ZI'])
        env.Append(LINKFLAGS=['-DEBUG'])
    else:
        env.Append(CPPDEFINES=['NDEBUG'])
        env.Append(CCFLAGS=['-O2', '-EHsc', '-MD'])

elif env['platform'] == "javascript":
    cpp_library += '.javascript'
    js = "true"
    bits = "wasm"
    if env['target'] in ('debug', 'd'):
        env.Append(CCFLAGS=["-O0", "-g"])        
    else:
        env.Append(CCFLAGS=["-O3"])
    env["ENV"] = os.environ
    env["CC"] = env['emscripten'] + "emcc"
    env["CXX"] = env['emscripten'] + "em++"
    env.Append(CPPFLAGS=["-s", "SIDE_MODULE=1"])
    env.Append(LINKFLAGS=["-s", "SIDE_MODULE=1"])
    env["SHOBJSUFFIX"] = ".bc"
    env["SHLIBSUFFIX"] = ".wasm"

if env['target'] in ('debug', 'd'):
    cpp_library += '.debug.' + str(bits) + ".a"
else:
    cpp_library += '.release.' + str(bits) + ".a"

# make sure our binding library is properly includes
env.Append(CPPPATH=['.', godot_headers_path, cpp_bindings_path + 'include/', cpp_bindings_path + 'include/core/', cpp_bindings_path + 'include/gen/'])
env.Append(LIBPATH=[cpp_bindings_path + 'bin/'])
env.Append(LIBS=[cpp_library])

# tweak this if you want to use different folders, or more folders, to store your source code in.
env.Append(CPPPATH=['src/'])
sources = Glob('src/*.cpp')

library = env.SharedLibrary(target=env['target_path'] + env['target_name'] , source=sources)

Default(library)

# Generates help for the -h scons option.
Help(opts.GenerateHelpText(env))
