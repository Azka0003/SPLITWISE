import logo5 from "../images/logo5.png"
import { useState, useRef } from "react";

export default function Groups() {

    const [groupname, setGroupName] = useState(false);

    const [members, setMembers] = useState([
        { id: 1, name: "", email: "" },
        { id: 2, name: "", email: "" },
        { id: 3, name: "", email: "" },
    ]);
    const [groupType, setGroupType] = useState("Home");
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    function handleNameChange(e) {
        const value = e.target.value;
        setGroupName(value.length > 0);
    }

    function handleMemberChange(id, field, value) {
        setMembers(prev =>
            prev.map(m => m.id === id ? { ...m, [field]: value } : m)
        );
    }

    function removeMember(id) {
        setMembers(prev => prev.filter(m => m.id !== id));
    }

    function addMember() {
        const newId = Date.now();
        setMembers(prev => [...prev, { id: newId, name: "", email: "" }]);
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (file) setSelectedFile(file.name);
    }

    const groupTypes = ["Home", "Trip", "Couple", "Other"];

    return (
        <div className="flex gap-6 p-8 w-full items-start lg:justify-center lg:p-24">

            {/* Left side: logo + file chooser */}
            <div className="hidden lg:flex flex-col items-center gap-3">
                <img src={logo5} alt="splitwise-logo" className="w-48 h-48 object-contain" />
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="group-image"
                        className="cursor-pointer border border-gray-300 bg-white px-3 py-1 rounded text-sm text-gray-700 hover:bg-gray-50"
                    >
                        Choose File
                    </label>
                    <input
                        ref={fileInputRef}
                        type="file"
                        id="group-image"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <span className="text-sm text-gray-500">
                        {selectedFile ? selectedFile : "No file chosen"}
                    </span>
                </div>
            </div>

            {/* Right side: form */}
            <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-gray-400 pb-4 uppercase whitespace-nowrap md:text-[18px]">
                    Start a new group
                </p>

                <form className="flex flex-col gap-2 lg:gap-4" onSubmit={e => e.preventDefault()}>

                    <label htmlFor="group-name" className="text-lg lg:text-xl whitespace-nowrap">
                        My group shall be called…
                    </label>
                    <input
                        type="text"
                        id="group-name"
                        name="group-name"
                        placeholder="FunkyYou"
                        className="p-2 outline-none border-[1px] border-gray-300 focus:border-blue-400 rounded-sm w-56 md:w-70 mb-4"
                        onChange={handleNameChange}
                    />

                    {groupname && (
                        <div className="flex flex-col gap-6">

                            {/* GROUP MEMBERS */}
                            <div>
                                <p className="text-sm font-semibold text-gray-400 uppercase mb-1">
                                    Group Members
                                </p>
                                <p className="text-sm text-gray-500 mb-3">
                                    Tip: Lots of people to add? Send your friends an{" "}
                                    <span className="text-teal-500 cursor-pointer hover:underline">invite link</span>.
                                </p>

                                {/* Current user */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                        A
                                    </div>
                                    <span className="text-sm text-gray-700">Azka (abdullasiddique027@gmail.com)</span>
                                </div>

                                {/* Member rows */}
                                <div className="flex flex-col gap-2">
                                    {members.map(member => (
                                        <div key={member.id} className="flex items-center gap-2">
                                            {/* Email icon */}
                                            <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                value={member.name}
                                                onChange={e => handleMemberChange(member.id, "name", e.target.value)}
                                                className="border border-gray-300 rounded px-2 py-1 text-sm w-32 outline-none focus:border-blue-400"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email address (optional)"
                                                value={member.email}
                                                onChange={e => handleMemberChange(member.id, "email", e.target.value)}
                                                className="border border-gray-300 rounded px-2 py-1 text-sm w-48 outline-none focus:border-blue-400"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeMember(member.id)}
                                                className="text-red-500 hover:text-red-700 text-lg font-bold leading-none"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={addMember}
                                    className="mt-3 text-teal-500 hover:text-teal-700 text-sm font-medium"
                                >
                                    + Add a person
                                </button>
                            </div>

                            <hr className="border-gray-200" />

                            {/* GROUP TYPE */}
                            <div>
                                <p className="text-sm font-semibold text-gray-400 uppercase mb-3">
                                    Group Type
                                </p>
                                <div className="relative w-fit">
                                    <select
                                        value={groupType}
                                        onChange={e => setGroupType(e.target.value)}
                                        className="appearance-none border border-gray-300 rounded px-3 py-1.5 pr-8 text-sm text-gray-700 bg-white outline-none focus:border-blue-400 cursor-pointer"
                                    >
                                        {groupTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-200" />

                            {/* SETTLE UP DAY */}
                            <div>
                                <p className="text-sm font-semibold text-gray-400 uppercase mb-2">
                                    Settle Up Day: <span className="text-gray-400">OFF</span>
                                </p>
                                <p className="text-sm text-gray-500">
                                    Currently, the settle up day can only be changed on the Splitwise app. Please use the app to update this setting.
                                </p>
                            </div>

                            <hr className="border-gray-200" />

                            {/* ADVANCED SETTINGS */}
                            <div>
                                <button type="button" className="text-teal-500 hover:text-teal-700 text-sm">
                                    Advanced settings »
                                </button>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="bg-orange-500 text-white font-semibold text-2xl w-fit px-4 py-2 rounded mt-2"
                    >
                        Save
                    </button>

                </form>
            </div>
        </div>
    );
}


